package demo.labaratoryframework.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class LaboratoryController {

    @GetMapping("/laboratories")
    public String fetchLaboratories() {
        // Logic to fetch laboratories from the backend
        return "List of laboratories";
    }

    @PostMapping("/tests")
    public String createTest(@RequestBody String testDetails) {
        // Logic to create a new test
        return "New test created";
    }

    @PutMapping("/tests/{id}")
    public String updateTest(@PathVariable Long id, @RequestBody String updatedTestDetails) {
        // Logic to update an existing test
        return "Test updated";
    }

    @DeleteMapping("/tests/{id}")
    public String deleteTest(@PathVariable Long id) {
        // Logic to delete an existing test
        return "Test deleted";
    }
}
