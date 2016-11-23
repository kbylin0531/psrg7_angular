<?php
/**
 * Repository: https://github.com/kbylin0531/Sharin.git
 * User: Linzh
 * Date: 11/13/16
 * Time: 7:52 PM
 */

namespace Application\Test\Controller;

use Sharin\Addon\Sign\SignAddon;
use Sharin\Addon\Sign\SignModel;

class Index
{
    /**
     * @var SignAddon
     */
    protected $addon = null;

    public function __construct()
    {
        $this->addon = SignAddon::getInstance(new SignModel());
    }

    public function hasSigned()
    {
//        $passord = md5(sha1('123456'));
//        $passord2 = md5(sha1('this is wrong password'));

        \Sharin\dumpout($this->addon->hasSigned());
    }

    public function signOut()
    {
        \Sharin\dumpout($this->addon->signOut());
    }

    public function signIn()
    {
        $info = [];
        $info[] = $this->addon->getInfo();
        $info[] = $this->addon->signIn('admin', SignAddon::encryptPassword('123456'),0);
        $info[] = $this->addon->getError();
        $info[] = $this->addon->getInfo();

        $info[] = $this->addon->signOut();

        $info[] = $this->addon->getInfo();
        $info[] = $this->addon->signIn('admin', SignAddon::encryptPassword('123456'),0);
        $info[] = $this->addon->getError();
        $info[] = $this->addon->getInfo();
        \Sharin\dump($info);
    }


}