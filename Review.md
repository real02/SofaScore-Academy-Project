# Review comments 8.6.2020.

- Maknuti node_modules i data direktorije s gita i iz historyja, vratiti bolji .gitignore

## App.js

- L:30 - odmah se moze izvaditi token s state.user.token pa je donji if visak
- L:54 - Bolje je ne raditi nista pa da ulogirani user ode na stranicu koju je htio, a ne uvijek na home

## checkResponseStatus.js

- dodati fallback, funkcija nece vratiti nista ako nisu 204 ili 200. Uvijek mora vratit nesto u ovom slucaju error. Bug se manifestiora na checkToken ruti jer umre app, zato jer se vrati undefined a ocekuje se objekt s error fieldom.

## checkToken.js

- treba poslati objekt izgleda { token: token_value }, a sada se salje samo token_value

## LoginPage.js

- L:29 - Najbolje ne raditi nista, ovako se user redirecta na \* url koji je 404 page ako upise krivi login
- L:30 - afirmativnoa logika bi bila bolji izbor. Ovako ako ne postoji data.errors (koji ne postoji jer je data.error) onda automatski prode login pa se moze loginati i s praznim i s krivim podacima

## Drawer

- Bilo bi dobro drawer renderati jednom, a ne za svaki page
- Ne radi hide jer se na zatvaranje boolean state pertvori u objekt, a logika handlea boolean stateove (ocekuje show da bude true/false, a bude { isVisible: true })
