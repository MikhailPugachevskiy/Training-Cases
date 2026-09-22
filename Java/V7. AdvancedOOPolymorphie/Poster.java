
public class Poster implements Dimension {

	public String schriftzug;
	public String grundfarbe;
	public double laenge;
	public double breite;
	
	public Poster(String str, String g, double l, double b) {
		this.schriftzug = str;
		this.grundfarbe = g;
		this.laenge = l;
		this.breite = b; 
	}
	
	public double hoehe() {
		return 0; 
	}
	
	public double laenge() {
		return this.laenge;
	}
	
	public double breite() {
		return this.breite; 
	}

    public String unit() {
    	return MASSEINHEIT;
    }
}
