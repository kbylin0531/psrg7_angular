<?php
namespace Application\Admin\Model;
/**
 * 文章标签关联表model
 * @method ArticleTagModel getInstance() static
 */
class ArticleTagModel extends BaseModel
{
    protected function tableName()
    {
        return 'tag';
    }

    protected function validateInsert($fields)
    {
        return true;
    }

    public function validateDelete($where)
    {
        return true;
    }

    protected function validateUpdate($fields, $where)
    {
        return true;
    }
    /**
     * 添加数据
     * @param int $aid 文章id
     * @param array $tids 标签id数组
     * @return bool
     */
    public function addData($aid, $tids)
    {
        foreach ($tids as $k => $v) {
            $tag_data = array(
                'aid' => $aid,
                'tid' => $v,
            );
            $this->add($tag_data);
        }
        return true;
    }

    // 传递aid删除相关数据
    public function deleteData($aid)
    {
        $this->where(array('aid' => $aid))->delete();
        return true;
    }

    // 传递aid和true时获取tid数组；传递aid和tname获得键名为aid键值为tname的数组
    public function getDataByAid($aid, $field = 'true')
    {
        if ($field == 'all') {
            return ArticleTagModel::getInstance()
                ->join('__TAG__ ON __ARTICLE_TAG__.tid=__TAG__.tid')
                ->where(array('aid' => $aid))
                ->select();
        } else {
            return $this->where(array('aid' => $aid))->getField('tid', true);
        }

    }


}




