export class Student {
    /**
     * Id of a Student. null or number
     */
    private id: number;
     /**
     * Name of a Student. null or string
     */
    private nom: string;
     /**
     * Firstname of a Student. null or string
     */
    private prenom: string;
     /**
     * Adress of a Student. null or string
     */
    private adresse: string;
     /**
     * Id of the Class of a Student. Default 1
     */
    private idclasse: number = 1;

    public setId(id: number): Student{
        this.id = id;
        return this;
    }

    /**
     * 
     * @param nom Set the name of this Student
     * @param nom Name of this Student
     * @return Student to chain invoke methods
     */
    public setNom(nom: string): Student {
        this.nom = nom;
        return this;
    }
    /**
     * 
     * @param prenom Set the firstname of this Student
     * @param prenom Firstname of this Student
     * @return Student to chain invoke methods
     */
    public setPrenom(prenom: string): Student {
        this.prenom = prenom;
        return this;}
    /**
     * 
     * @param adress Set the adress of this Student
     * @param adresse Adress of this Student
     * @return Student to chain invoke methods
     */
    public setAdresse(adresse: string): Student {
        this.adresse = adresse;
        return this;}

    /**
     * Returns the name of this Student 
     * @return string
     */
        public getNom(): string{
        return this.nom;
    }
    public getPrenom(): string{
        return this.prenom;
    }
    public getAdresse(): string{
        return this.adresse;
    }
    /**Returns the Id of the Class */
    public getClasse(): number {
        return this.idclasse;
    }
    /**Returns the Id of this Student */
    public getId(): number {
        return this.id;
    }
}
