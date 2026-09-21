//Abstrakte Klassen sind Klassen, die nicht instanzierbar sind
public abstract class Fahrzeug {
	
	public float geschwindigkeit;
	public String anzahlSitzpl�tze; 
	
	//Abstrakte Methoden
	public abstract void starteMotor();
	public abstract void stoppeMotor(); 

}
