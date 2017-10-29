# FA-VARS


Buna tuturor,<br />
In acest tutorial va voi arata cum sa adaugati o parte din variabile, pe o pagina html ([aici](http://help.forumgratuit.ro/intrebari-frecvente-f5/lista-de-variabile-t9087.htm) gasiti lista cu toate variabilele).

Atentie!<br />
Aceste variabile nu vor functiona la browserele mai vechi (versiuni vechi) si la cei care au dezactivat JavaScript.

### Instalare:
Adaugati codul de mai jos la inceputul codului html al paginii
(Panou de administrare => Module => HTML & JAVASCRIPT => Administrare pagini HTML => Adauga o pagina HTML => Cod HTML)
```javascript
<script type="text/javascript" src="https://cdn.rawgit.com/SSYT/FA-VARS/master/var-fa.js"></script>
```

### Utilizare:
Adaugati variabilele dorite. Ele pot fi introduse in mai multe feluri, dupa bunul plac:<br />
`<span class="USERNAME"></span>`<br />
`<div class="FORUMNAME USERNAME"></div>`<br />
`<span class="USERNAME">Nick-name-ul meu: </span>` - [u]Afisare:[/u] Nick-name-ul meu: Nume<br />
`<input type="text" class="USERNAME" />`


### Lista variabilelor pentru o pagina html:
Numele forumului<br />
`{FORUMNAME}`

Numele forumului cu link<br />
`{FORUMNAMELINK}`

Descrierea site-ului<br />
`{FORUMDESC}`

Data lansării forumului<br />
`{FORUMBIRTHDAY}`

Vârsta forumului în zile<br />
`{FORUMAGE}`

Numărul de forumuri / categorii<br />
`{FORUMCOUNTFORUM}`

Numărul de subiecte<br />
`{FORUMCOUNTOPIC}`

Numărul de mesaje<br />
`{FORUMCOUNTPOST}`

Numărul de utilizatori<br />
`{FORUMCOUNTUSER}`

Număr record de utilizatori conectaţi în acelşi timp<br />
`{FORUMONLINEUSER}`

Data recordului de conectări<br />
`{FORUMONLINEDATE}`

Ultimul utilizator înregistrat<br />
`{FORUMLASTUSER}`

Nume şi link spre profilul ultimului utilizator înregistrat<br />
`{FORUMLASTUSERLINK}`

Nume utilizator<br />
`{USERNAME}`

Nume şi link spre profilul<br />
`{USERLINK}`

Data naşterii<br />
`{USERBIRTHDAY}`

Vârstă<br />
`{USERAGE}`

Data înscrierii<br />
`{USERREGDATE}`

Ultima vizită<br />
`{USERLASTVISIT}`

Numărul mesajelor postate<br />
`{USERCOUNTPOST}`
