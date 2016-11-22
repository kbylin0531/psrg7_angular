<?php
namespace Application\Admin\Model;

/**
 * Class ArticleViewModel
 *
 * @method ArticleViewModel getInstance() static
 * @package Common\Model
 */
class ArticleViewModel extends ViewModel
{    protected function tableName()
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
    public $viewFields = array(
        'article' => array('aid', 'title', 'author', 'content', 'description', 'is_show', 'is_top', 'is_delete', 'click', 'addtime'),
        'category' => array('cname', '_on' => 'article.cid=category.cid'),
        'article_tag' => array('tid', '_on' => 'article.aid=article_tag.aid'),
        'tag' => array('tname', '_on' => 'article_tag.tid=tag.tid'),
    );

    public function getAllData()
    {
        return $this->select();
    }
}



