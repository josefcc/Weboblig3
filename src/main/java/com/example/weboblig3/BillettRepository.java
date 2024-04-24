package com.example.weboblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository

public class BillettRepository {
    @Autowired
    private JdbcTemplate db;
    public void lagreBillett(Billett innBillett){
        String sql = "insert into Billett (filmNavn, antall, fornavn, etternavn, telefonnr, epost) " +
                "values(?,?,?,?,?,?)";
        db.update(sql, innBillett.getFilmNavn(), innBillett.getAntall(), innBillett.getFornavn(), innBillett.getEtternavn(), innBillett.getTelefonnr(), innBillett.getEpost());
    }

    public List<Billett> hentBilletter(){
        String sql = "select * from Billett order by etternavn";
        List<Billett> billetter = db.query(sql, new BeanPropertyRowMapper<>(Billett.class));
        return billetter;
    }

    public void slett(){
        db.update("delete from Billett");
    }
}






