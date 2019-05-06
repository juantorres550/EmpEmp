<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TuParche | @yield('title')</title>

    <!-- Stylesheets -->
    <link rel="stylesheet" href="{{ asset('css/fontawesome.css') }}">
    <link rel="stylesheet" href="{{ asset('css/normalize.css') }}">
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>

<body>
    <header>
        <div class="bar">
            <div class="content">
                <h1>TÚ<span>PARCHE</span></h1>
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

    <script src="{{ asset('js/sweetalert2.all.min.js') }}"></script>
    <script src="{{ asset('js/scripts.js') }}"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDjig5TF23impJc_Z628m1YTLx2SOG3WXc&callback=initMap"></script>
</body>

</html>
