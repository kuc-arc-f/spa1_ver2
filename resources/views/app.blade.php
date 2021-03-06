<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
        <script>
            window.Laravel = {
                csrfToken: "{{ csrf_token() }}"
            };
        </script>
    </head>
    <body>
        <div id="app">
        <navbar></navbar>
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
        <script src="/js/my_storage.js?A3"></script>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
