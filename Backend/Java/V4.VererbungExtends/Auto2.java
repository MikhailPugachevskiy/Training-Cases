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
