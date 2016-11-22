<?php
/**
 * Repository: https://github.com/kbylin0531/psrg7_newest.git
 * User: Linzh
 * Date: 11/15/16
 * Time: 10:39 PM
 */

namespace Application\Admin\Controller;

use Sharin\Addon\Sign\SignAddon;
use Sharin\Addon\Sign\SignModel;
use Sharin\Core\Response;
use Sharin\Traits\Controller\Redirect;
use Sharin\Traits\Controller\Render;

class Publics
{
    use Render;
    use Redirect;

    protected $context = null;

    /**
     * @var SignAddon
     */
    protected $sign = null;

    public function __construct()
    {
        $this->sign = SignAddon::getInstance(SignModel::getInstance());
        if ($this->sign->getInfo()) {
            $this->redirect('Admin/Index/index');
        }
    }

    public function logout()
    {
        $this->sign->signOut();
        $this->display('login');
    }

    /**
     * get name-code pair of country
     */
    public function countries()
    {
        Response::cleanOutput();
        $content = file_get_contents(__DIR__ . '/../Data/countries.json');
        header('Content-Type:application/json; charset=utf-8');
        exit($content);
    }

    public function login($username = '', $password = '')
    {
        if (SR_IS_POST) {
            $result = $this->sign->signIn($username, $password);
            if (!$result) {
                $this->ajaxFailure($this->sign->getError());
            } else {
                $this->redirect('Admin/Index/index');
            }
        }
        $this->display('login');
    }

    protected function ajaxSuccess($message)
    {
        Response::ajaxBack([
            'status' => 1,
            'message' => $message,
        ]);
    }

    protected function ajaxFailure($message)
    {
        Response::ajaxBack([
            'status' => 0,
            'message' => $message,
        ]);
    }
}