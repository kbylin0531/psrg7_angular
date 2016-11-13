<?php
/**
 * Repository: https://github.com/kbylin0531/psrg7_newest.git
 * User: Linzh
 * Date: 11/13/16
 * Time: 4:08 PM
 */
return [

    DRIVER_CLASS_LIST => [
        'Sharin\\Library\\Dao\\MySQL',
        'Sharin\\Library\\Dao\\Oci',
        'Sharin\\Library\\Dao\\SQLServer',
    ],
    DRIVER_CONFIG_LIST => [
        [
            'dbname'    => 'sharin',//选择的数据库
            'username'  => 'lin',
            'password'  => '123456',
            'host'      => '127.0.0.1',
            'port'      => '3306',
            'charset'   => 'UTF8',
            'dsn'       => null,//默认先检查差DSN是否正确,直接写dsn而不设置其他的参数可以提高效率，也可以避免潜在的bug
            'options'   => [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,//默认异常模式
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,//结果集返回形式
            ],
        ]
    ],
    //禁止访问的PDO函数的名称
    'forbidden' => [
        'forbid', 'getColumnMeta'
    ],

];