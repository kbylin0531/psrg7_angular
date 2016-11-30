<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2016/11/28
 * Time: 21:33
 */

namespace Application\Admin\Blog\Model;


class TagModel extends BlogModel
{
    protected function tableName()
    {
        return 'tag';
    }


}