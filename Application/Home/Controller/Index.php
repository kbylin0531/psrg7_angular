<?php
namespace Application\Home\Controller;


class Index
{

    public function index()
    {
        die('<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sharin Demo</title>
</head>
<body>
<center>
    <h1>Hello!</h1>
    <p>The project is powered by Lin.</p>
    <p>
        <a target="_blank" href="https://github.com/kbylin0531/Sharin">Goto the project on github.</a>
    </p>
</center>
</body></html>');
    }

}