//Übungsaufgabe 1.3
/*Erstellen Sie eine Java-Klasse Auto. Ihr Programm sollte mit einer
main-Methode ausgestattet sein und den User begrüßen. 
Integrieren Sie bitte sinnvolle Attribute sowie Methoden in die Klasse Auto!*/

public class Auto {

	//Hauptprogramm
	public static void main(String args[]) {
		System.out.println("Willkommen.....Hier k�nnen Autos verwaltet werden.");
		Auto meinAuto = new Auto(54412, "VW", "Golf", "rot", false);		
		gebeAutoFarbeAus(meinAuto); 
		lackiereAuto(meinAuto, "grau");
		gebeAutoFarbeAus(meinAuto); 
	}

//Übungsaufgabe 2.1
/*Erweitern Sie Ihr Projekt, um eine Klasse Auto der Sie geeignete Attribute mit geeigneten Typen zuordnen. Ordnen Sie diese Klasse einem selbstgewählten Java-Package zu. */

Package fortbewegungsmittel;

	public class Auto
	{
		public int ps;
		public char laenderkennzeichen;
		public double verbrauchAuf100Km;
	}

//Übungsaufgabe 2.2
/*Erweitern Sie Ihre Klasse Auto um eine Methode public static void hupen(). Diese Methode soll beim Aufruf nur "HUUUUP" ausgeben.*/

			public static void hupen() {
				System.out.printIn("HUUUUP");
			}

			public static void main(String[] args) {
				hupen();
			}

	//Instanzvariable
	int vin; //Fahrgestellnummer
	String marke;
	String modell;
	String farbe;
	boolean istAutomatikgetriebe;
	
	//Konstruktor
	public Auto(int vin, String marke, String modell, String farbe, boolean istAutomatik) {
		this.vin = vin;         
		this.marke = marke;
		this.modell = modell;
		this.farbe = farbe;
		this.istAutomatikgetriebe = istAutomatik;
	}
	
	public static void gebeAutoFarbeAus(Auto auto) {
		System.out.println("Fahrgestellnummer: "+ auto.vin + " " + auto.farbe);
	}
	
	public static void lackiereAuto(Auto auto, String neueFarbe) {
		System.out.println("Auto wird umlackiert mit der Farbe: " + neueFarbe); 
		auto.farbe = neueFarbe;
	}
	
}
