package com.naurioecommerce.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    // @GetMapping("/")
    // public String home() {
    //     // return "Welcome to Naurio Ecommerce Backend API!";
    //     // return NaurioFrontend/public:/Index.html;
    //     return "forward:/Index.html";
    // }

  @GetMapping(value = "/", produces = MediaType.TEXT_HTML_VALUE)
    public String serveIndexHtml() {
        try {
            // Adjust path if needed — this goes one level up to NaurioEmpire and into NaurioFrontend
            String path = "../NaurioFrontend/auth/logs/log.html";
            return new String(Files.readAllBytes(Paths.get(path)));
        } catch (IOException | SecurityException e)  {
            return "<h1>Error loading index.html</h1><p>" + e.getMessage() + "</p>";
        }
    }

}   
