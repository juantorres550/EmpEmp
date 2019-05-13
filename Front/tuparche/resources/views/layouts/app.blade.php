<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>TuParche | @yield('title')</title>

    <!-- Stylesheets -->
    <link rel="stylesheet" href="{{ asset('css/all.css') }}">
</head>

<body>
    <div id="app">
        <header>
            <div class="bar">
                <div class="content">
                    <h1>TU<span>PARCHE</span></h1>
                    <nav id="ppal_nav">
                        @yield('ppal_nav')
                    </nav>
                </div>
                <!--.content-->
            </div>
            <!--.bar-->
        </header>
    
        <div id="web_cont">
            <aside>
                <div class="resp_menu">
                    <div class="cont"></div>
                </div>
    
                <div class="all_content">
                    @yield('aside_content')
                </div>
            </aside>
    
            <main id="map">
                <!-- Here comes the map -->
            </main>
        </div>
    </div>

    <script src="{{ asset('js/scripts.js') }}"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLLjXNu6N00wNfKOMht00HNyHIKqstdMY&callback=initMap"></script>
</body>

</html>