<?php
error_reporting(E_ALL);
require_once 'dompdf/autoload.inc.php';
use Dompdf\Dompdf;

// Instantiate Dompdf class
$dompdf = new Dompdf();

// Load HTML content from file
$html = file_get_contents("https://www.dooremolen.com");

// Load HTML content into Dompdf
$dompdf->loadHtml($html);

// Set paper size and orientation
$dompdf->setPaper('A4', 'portrait');

// Render the PDF output
$dompdf->render();

// Output the PDF as a download or save to a file
$dompdf->stream('my_resume.pdf');

?>