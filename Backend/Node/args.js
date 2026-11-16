console.log("HELLO FROM ARGS FILE!")
console.log(process.argv)

/*
- process ist ein Objekt, das Node dir automatisch gibt, ohne require.
- process.argv ist ein Array mit allem, was du in die Kommandozeile geschrieben hast.
- argv[0] ist der Pfad zu node, argv[1] der Pfad zu deiner Datei, ab argv[2] folgen deine Eingaben.
- Beispiel: node args.js Tim Bob   ergibt [ '…node.exe', '…args.js', 'Tim', 'Bob' ]
- Alle Werte sind Strings, auch Zahlen.*/