<?php
/**
 * Repository: https://github.com/kbylin0531/psrg7_newest.git
 * User: Linzh
 * Date: 11/22/16
 * Time: 10:24 PM
 */

namespace Application\Admin\Controller;

/**
 * Class Article 文章管理
 * @package Application\Admin\Controller
 */
class Article extends Index
{

    //文章列表
    public function index()
    {
        $data = $this->db->getPageData('all', 'all', 'all', 0, 15);
        $this->assign('data', $data['data']);
        $this->assign('page', $data['page']);
        $this->display();
    }

    // 添加文章
    public function add()
    {
        if (IS_POST) {
            if ($aid = $this->db->addData()) {
                $baidu_site_url = C('BAIDU_SITE_URL');
                if (!empty($baidu_site_url)) {
                    $this->baidu_site($aid);
                }
                $this->success('文章添加成功', U('Admin/Article/index'));
            } else {
                $this->error($this->db->getError());
            }
        } else {
            $allCategory = CategoryModel::getInstance()->getAllData();
            if (empty($allCategory)) {
                $this->error('请先添加分类');
            }
            $allTag = TagModel::getInstance()->getAllData();
            $this->assign('allCategory', $allCategory);
            $this->assign('allTag', $allTag);
            $this->display();
        }

    }

    // 向同步百度推送
    public function baidu_site($aid)
    {
        $urls = array();
        $urls[] = U('Home/Index/article', array('aid' => $aid), '', true);
        $api = C('BAIDU_SITE_URL');
        $ch = curl_init();
        $options = array(
            CURLOPT_URL => $api,
            CURLOPT_POST => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POSTFIELDS => implode("\n", $urls),
            CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
        );
        curl_setopt_array($ch, $options);
        $result = curl_exec($ch);
        $msg = json_decode($result, true);
        if ($msg['code'] == 500) {
            curl_exec($ch);
        }
        curl_close($ch);
    }

    // 修改文章
    public function edit()
    {
        if (IS_POST) {
            if ($this->db->editData()) {
                $this->success('修改成功');
            } else {
                $this->error('修改失败');
            }
        } else {
            $aid = I('aid');
            $data = $this->db->getDataByAid($aid);
            $allCategory = CategoryModel::getInstance()->getAllData();
            $allTag = TagModel::getInstance()->getAllData();
            $this->assign('allCategory', $allCategory);
            $this->assign('allTag', $allTag);
            $this->assign('data', $data);
            $this->display();
        }
    }

    // 彻底删除
    public function delete()
    {
        if ($this->db->deleteData()) {
            $this->success('彻底删除成功');
        } else {
            $this->error('彻底删除失败');
        }
    }

}