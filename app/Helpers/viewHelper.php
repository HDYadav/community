<?php

function group_color($colour=null)
{

        switch ($colour) {
                case ('0'):
                        $colour ='color:brown;';
                        break; 
                case ('1'):
                        $colour ='color:blue;';
                        break;
                case ('2'):
                        $colour ='color:green;';
                        break;
                case ('3'):
                        $colour ='color:red;';
                        break;
                default:
                $colour ='color:black;';
        }

    return $colour;
}
