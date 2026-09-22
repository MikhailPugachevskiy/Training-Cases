
public class Haus implements Dimension {

	public String haustyp; 
	public int stockwerk;
	public double laenge;
	public double hoehe;
	public double breite;
	
	public Haus(String typ, int stockwerk, double l, double h, double b) {
		this.haustyp = typ;
		this.stockwerk = stockwerk;
		this.laenge = l;
		this.hoehe = h;
		this.breite = b;
	}
	
	public int stockwerk(){
		return this.stockwerk;
	}
	
	public double laenge() {
		return this.laenge;
	}
	
	public double hoehe() {
		return this.hoehe;
	}
	
	public double breite() {
		return this.breite; 
	}
}
