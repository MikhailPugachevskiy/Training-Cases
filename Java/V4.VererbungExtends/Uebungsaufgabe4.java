//Vorlesung 4: Vererbung/Extends

/*Übungsaufgabe 4.1:
Betrachten Sie eine beliebige Vererbungshierarchie zwischen drei Klassen (z.B. Fahrzeug als Oberklasse von Auto als Oberklasse von Cabrio).
Realisieren Sie diese drei Klassen (mit jeweils mind. einem Attribut)
und die Vererbungsbeziehungen. -> nehmen aus Datei "Auto2.java"*/

//Abstrakte Klassen sind Klassen, die nicht instanzierbar sind -> nehmen aus Datei "Fahrzeug.java"
public abstract class Fahrzeug {
	
	public float geschwindigkeit;
	public String anzahlSitzplaetze; 
	
	//Abstrakte Methoden
	public abstract void starteMotor();
	public abstract void stoppeMotor(); 

}

//...und die Vererbungsbeziehungen -> nehmen aus Datei "Cabrio.java"


public class Auto2 extends Fahrzeug {
	
	String hauptuntersuchung; 
	
	public void starteMotor() {
		System.out.println("Der Motor ist gestartet");
	}
	
	public void stoppeMotor() {
		System.out.println("Der Motor ist gestoppt.");
	}

	//Konstruktor
	public Auto2(float velocity) {
		this.geschwindigkeit = velocity;
	}
	
	public float getGeschwindigkeit(Auto2 auto) {
		return this.geschwindigkeit; 
	}
	
	public float getGeschwindigkeit(Auto2 auto, String miles) {
		return (this.geschwindigkeit/1.609344f); 
	}
	
	public static void main(String args[]) {
		Auto2 meinAuto = new Auto2(120); 
		System.out.println("Geschwindigkeit in km/h: "+ meinAuto.getGeschwindigkeit(meinAuto));
		System.out.println("Geschwindigkeit in mph: "+ meinAuto.getGeschwindigkeit(meinAuto, "meilen"));
	}
	
}


public class Cabrio extends Auto2{
	
	public String verdeckfarbe;
	
	//Konstruktor
	public Cabrio(float geschwindigkeit, String verdeckfarbe) {
		super(geschwindigkeit); 
		this.verdeckfarbe = verdeckfarbe;
	}
	
	public String getVerdeckfarbe() {
		return this.verdeckfarbe;
	}
	
	public static void main(String args[]) {
		Cabrio meinCabrio = new Cabrio(90f, "rot");
		System.out.println("Mein Cabrio faehrt in km/h: "+meinCabrio.getGeschwindigkeit(meinCabrio));
		System.out.println("Mein Cario faehrt in mph: "+meinCabrio.getGeschwindigkeit(meinCabrio, "meilen")); 
		System.out.println("Mein Cabrio hat die Verdeckfarbe: " +meinCabrio.getVerdeckfarbe()); 
	}

}
