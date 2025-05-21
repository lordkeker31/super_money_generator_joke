<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebInterfaceController extends Controller
{
    function MainFace(Request $request) {
        return view('react');
    }
}
