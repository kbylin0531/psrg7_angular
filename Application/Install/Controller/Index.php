<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2016/11/24
 * Time: 19:55
 */

namespace Application\Install\Controller;
use Sharin\Traits\Controller\Render;

const LOCK_FILE = SR_PATH_RUNTIME.'install.lock';

class Index
{
    use Render;

    public function __construct()
    {
        header('Content-type:text/html;charset=utf-8');
        if (file_exists(LOCK_FILE)) {
            die('你已经安装过该系统，重新安装需要先删除/Runtime/install.lock 文件');
        }
    }

    public function agreement(){
        $this->display();
    }

    public function test(){
        $this->display();
    }
    public function create(){
        $this->display();
    }
    public function success(){

        if(SR_IS_POST){

            $data=$_POST;
            // 连接数据库
            $link=@new mysqli("{$data['DB_HOST']}:{$data['DB_PORT']}",$data['DB_USER'],$data['DB_PWD']);
            // 获取错误信息
            $error=$link->connect_error;
            if (!is_null($error)) {
                // 转义防止和alert中的引号冲突
                $error=addslashes($error);
                die("<script>alert('数据库链接失败:$error');history.go(-1)</script>");
            }
            // 设置字符集
            $link->query("SET NAMES 'utf8'");
            $link->server_info>5.0 or die("<script>alert('请将您的mysql升级到5.0以上');history.go(-1)</script>");
            // 创建数据库并选中
            if(!$link->select_db($data['DB_NAME'])){
                $create_sql='CREATE DATABASE IF NOT EXISTS '.$data['DB_NAME'].' DEFAULT CHARACTER SET utf8;';
                $link->query($create_sql) or die('创建数据库失败');
                $link->select_db($data['DB_NAME']);
            }
            // 导入sql数据并创建表
            $bjyblog_str=file_get_contents('./bjyblog.sql');
            $sql_array=preg_split("/;[\r\n]+/", str_replace('bjy_',$data['DB_PREFIX'],$bjyblog_str));
            foreach ($sql_array as $k => $v) {
                if (!empty($v)) {
                    $link->query($v);
                }
            }
            $link->close();
            $db_str=<<<php
<?php
return array(

//*************************************数据库设置*************************************
    'DB_TYPE'               =>  'mysqli',                 // 数据库类型
    'DB_HOST'               =>  '{$data['DB_HOST']}',     // 服务器地址
    'DB_NAME'               =>  '{$data['DB_NAME']}',     // 数据库名
    'DB_USER'               =>  '{$data['DB_USER']}',     // 用户名
    'DB_PWD'                =>  '{$data['DB_PWD']}',      // 密码
    'DB_PORT'               =>  '{$data['DB_PORT']}',     // 端口
    'DB_PREFIX'             =>  '{$data['DB_PREFIX']}',   // 数据库表前缀
);
php;
            // 创建数据库链接配置文件
            file_put_contents('../../Application/Common/Conf/db.php', $db_str);
            @touch('./install.lock');

            $this->display();

        }

    }

}