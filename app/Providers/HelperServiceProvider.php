<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class HelperServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register()
    {
        foreach (glob(sprintf('%s/Helpers/*.php', app_path())) as $helper_file) { require_once($helper_file); } 
    }

    /**
     * Bootstrap services.
     */
    public function boot()
    {
        //
    }
}
