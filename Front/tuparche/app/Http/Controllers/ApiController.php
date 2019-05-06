<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use GuzzleHttp\Client;

class ApiController extends Controller
{
    private function getAuth()
    {
        $client = new Client();
        $r = $client->request('POST', 'https://tuparche.herokuapp.com/auth', 
            ['body' => json_encode(['rol' => 'guest'])]);

        return json_decode($r->getBody()->getContents())->token;
    }

    public function getZones()
    {
        $token = $this->getAuth();
        $client = new Client();
        $r = $client->request('GET', 'https://tuparche.herokuapp.com/sector',
            [
                'headers' => [
                    'Authorization' => 'bearer ' . $token,
                ]
            ]
        );

        return $r->getBody()->getContents();

    }
}
