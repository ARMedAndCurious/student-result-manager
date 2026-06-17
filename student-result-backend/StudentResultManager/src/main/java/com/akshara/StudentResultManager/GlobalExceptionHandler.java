package com.akshara.StudentResultManager;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GlobalExceptionHandler {

    @ExceptionHandler(ResultNotFoundException.class)
    public ResponseEntity<Map<String,Object>> handleResultNotFoundException(ResultNotFoundException ex){
        Map<String,Object> error = new HashMap<>();
        error.put("status", 404);
        error.put("message", ex.getMessage());
        error.put("timestamp", LocalDateTime.now());

        return ResponseEntity.status(404).body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String,Object>> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex){
        List<String> errors = ex.getBindingResult()
                        .getFieldErrors()
                .stream()
                .map(err -> err.getField() + ": " + err.getDefaultMessage())
                .toList();
        Map<String, Object> error = new HashMap<>();
        error.put("status", 400);
        error.put("errors", errors);
        error.put("timestamp", LocalDateTime.now());

        return ResponseEntity.status(400).body(error);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGeneral(Exception ex) {

        Map<String, Object> error = new HashMap<>();
        error.put("status", 500);
        error.put("message", "Something went wrong");
        error.put("timestamp", LocalDateTime.now());

        return ResponseEntity.status(500).body(error);
    }

}
