<?php
/**
 * Repository: https://github.com/kbylin0531/psrg7_newest.git
 * User: Linzh
 * Date: 11/12/16
 * Time: 10:29 PM
 */
namespace Application\Admin\Controller;

use Sharin\Addon\Sign\SignAddon;
use Sharin\Addon\Sign\SignModel;
use Sharin\Traits\Controller\Redirect;
use Sharin\Traits\Controller\Render;

class Index
{

    use Render;
    use Redirect;
    /**
     * @var SignAddon
     */
    protected $sign = null;

    public function __construct()
    {
        $this->sign = SignAddon::getInstance(SignModel::getInstance());
        if (!$this->sign->getInfo()) {
            $this->redirect('Admin/Publics/login');
        }
    }


    public function index()
    {
        $this->assign('psrg_vars', json_encode([
            'basic_url' => SR_PUBLIC_PATH_URL,
        ]));
        $this->display();
    }

}