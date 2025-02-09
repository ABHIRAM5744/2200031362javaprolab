package com.klef.jfsd.exam.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/SpringMVC")
public class ClientController {

    @GetMapping("/greet")
    public String greet(@RequestParam String username, Model model) {
        model.addAttribute("username", username);
        return "greet";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/demo1")
    public String demo1(@RequestParam int age, @RequestParam String country, Model model) {
        model.addAttribute("age", age);
        model.addAttribute("country", country);
        return "demo1";
    }

    @GetMapping("/demo2/{num1}/{num2}")
    public String demo2(@PathVariable int num1, @PathVariable int num2, Model model) {
        model.addAttribute("subtraction", num1 - num2);
        model.addAttribute("division", (double) num1 / num2);
        return "demo2";
    }

    @GetMapping("/productform")
    public String productForm() {
        return "productform";
    }

    @GetMapping("/multiplyNumbers")
    public String multiply(@RequestParam int num1, @RequestParam int num2, Model model) {
        model.addAttribute("result", num1 * num2);
        return "multiply";
    }

    @GetMapping("/reverse")
    public String reverse(@RequestParam String str1, @RequestParam String str2, Model model) {
        model.addAttribute("reversed1", new StringBuilder(str1).reverse().toString());
        model.addAttribute("reversed2", new StringBuilder(str2).reverse().toString());
        return "reverse";
    }

    @GetMapping("/calculate")
    public String calculate(@RequestParam int num1, @RequestParam int num2, Model model) {
        model.addAttribute("sum", num1 + num2);
        model.addAttribute("difference", num1 - num2);
        return "calculate";
    }
}