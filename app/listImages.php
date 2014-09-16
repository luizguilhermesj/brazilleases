<?php 
function getImages($path) {
  if ($handle = opendir($path)) {
      $images = array();
      while (false !== ($file = readdir($handle))) {
          if($file !== "." && $file !== ".." ) {
              $images[]["path"] = $path.'/'.$file;
          }
      }
      closedir($handle);
      return $images;
  }
}

$return = array();
$return[] = getImages("images/apartments/rodolfo_dantas");
$return[] = getImages("images/apartments/ronald_de_carvalho");

echo json_encode($return);