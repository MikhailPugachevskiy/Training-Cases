//Vorlesung 2: Grundlegende Konzepte von Objekt-Orientierung: Klasse, Objekt, Attribut, Methode, Beziehung

public class Mitarbeiter {
	
	//Instanzvariable
	int personalnummer; //unique 
	int arbeitsstunden; 
	String vorname;
	String nachname;
	String anschrift;
	boolean istExternerMitarbeiter; 
	//Klassenvariable
	static int anzahlMitarbeiter; 
	
	//Konstruktor ist eine spezielle Methode
	Mitarbeiter(int p, int a, String v, String n, String addr, boolean iEM){
	 this.personalnummer = p; 	
	 this.arbeitsstunden = a;
	 this.vorname = v;
	 this.nachname = n;
	 this.anschrift = addr;
	 this.istExternerMitarbeiter = iEM;
	}

}
