package com.example.weboblig3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettKontroller {

    @Autowired
    private BillettRepository rep;

    @PostMapping("/lagre")
    public void lagreKunde(Billett innbillett){
        rep.lagreBillett(innbillett);
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return rep.hentBilletter();
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slett();
    }
}


