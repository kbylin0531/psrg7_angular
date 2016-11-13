<?php
/**
 * Repository: https://github.com/kbylin0531/psrg7_newest.git
 * User: Linzh
 * Date: 11/12/16
 * Time: 10:29 PM
 */
namespace Application\Admin\Controller;

use Sharin\Core\SEK;
use Sharin\Library\View;

class Index
{
    private $context = null;

    public function __construct()
    {
        $this->context = [
            't' => '',
            'm' => 'Admin',
            'c' => 'Index',
            'a' => null,
        ];
    }

    public function index()
    {
        $this->display();
    }

    public function app()
    {
        die('dadsada');
    }

    final protected function display($template = null)
    {
        View::assign('psrg_vars',json_encode([
            'basic_url' => SR_PUBLIC_PATH_URL,
        ]));
        isset($template) or $template = SEK::backtrace(SEK::ELEMENT_FUNCTION, SEK::PLACE_FORWARD);
        $this->context['a'] = $template;
        View::display($this->context);
    }

}