<?php
namespace Application\Home\Controller;

use Sharin\Traits\Controller\Render;

class Index {

    use Render;

    public function index(){
        $this->assign('info',[
            'author'    => 'lin',
            'address'   => 'https://github.com/kbylin0531/sharin7',
        ]);
        $this->display();
    }

}