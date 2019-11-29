package fr.gtm.bovoyages.dto;

import java.io.Serializable;

import fr.gtm.bovoyages.entities.Destination;


public class DestinationDTO implements Serializable {
	private long id;
	private String region;
	private String descriptif;
	
	public DestinationDTO() {}

	public DestinationDTO(Destination destination) {
		id = destination.getId();
		region = destination.getRegion();
		descriptif = destination.getDescriptif();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getDescriptif() {
		return descriptif;
	}

	public void setDescriptif(String descriptif) {
		this.descriptif = descriptif;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((descriptif == null) ? 0 : descriptif.hashCode());
		result = prime * result + (int) (id ^ (id >>> 32));
		result = prime * result + ((region == null) ? 0 : region.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DestinationDTO other = (DestinationDTO) obj;
		if (descriptif == null) {
			if (other.descriptif != null)
				return false;
		} else if (!descriptif.equals(other.descriptif))
			return false;
		if (id != other.id)
			return false;
		if (region == null) {
			if (other.region != null)
				return false;
		} else if (!region.equals(other.region))
			return false;
		return true;
	}



}
