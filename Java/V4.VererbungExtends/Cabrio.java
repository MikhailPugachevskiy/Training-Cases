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
		System.out.println("Mein Cabrio f�hrt in km/h: "+meinCabrio.getGeschwindigkeit(meinCabrio));
		System.out.println("Mein Cario f�hrt in mph: "+meinCabrio.getGeschwindigkeit(meinCabrio, "meilen")); 
		System.out.println("Mein Cabrio hat die Verdeckfarbe: " +meinCabrio.getVerdeckfarbe()); 
	}

}
