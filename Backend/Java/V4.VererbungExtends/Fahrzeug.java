//Abstrakte Klassen sind Klassen, die nicht instanzierbar sind -> benötgigt für Übungsaufgave 4.1
public abstract class Fahrzeug {
	
	public float geschwindigkeit;
	public String anzahlSitzplaetze; 
	
	//Abstrakte Methoden
	public abstract void starteMotor();
	public abstract void stoppeMotor(); 

}
