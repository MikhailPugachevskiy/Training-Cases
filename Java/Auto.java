//Übungsaufgabe 2.3
/*Erstellen Sie eine Java-Klasse Auto. Ihr Programm sollte mit einer
main-Methode ausgestattet sein und den User begrüßen. 
Integrieren Sie bitte sinnvolle Attribute sowie Methoden in die Klasse Auto!*/

public class Auto {

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
	
	//Hauptprogramm
	public static void main(String args[]) {
		System.out.println("Willkommen.....Hier k�nnen Autos verwaltet werden.");
		Auto meinAuto = new Auto(54412, "VW", "Golf", "rot", false);		
		gebeAutoFarbeAus(meinAuto); 
		lackiereAuto(meinAuto, "grau");
		gebeAutoFarbeAus(meinAuto); 
	}
	
}
