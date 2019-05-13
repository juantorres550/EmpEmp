<?php

namespace App\Http\Middleware;

use Closure;

class AllowOnlyAjaxRequests
{
    /**
    * Handle an incoming request.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  \Closure  $next
    * @return mixed
    */
    public function handle($request, Closure $next)
    {
        if($request->header('x-csrf-token') !== csrf_token()) {
            // Handle the non-ajax request
            // $request->header('x-csrf-token')
            return abort(403, "You're not authorized to make this action");
        }

        return $next($request);
    }
}    