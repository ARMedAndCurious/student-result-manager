package com.akshara.StudentResultManager;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Student {

    @Id
    @GeneratedValue
    private Integer id;

    @NotBlank
    private String name;

    @Email
    private String email;

    private String rollNumber;

    @OneToMany( mappedBy = "student", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Subject> subjects ;

}
