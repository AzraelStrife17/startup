const coldIronBonus = 0.03;
const graveFiendsBonus = 0.025;
const recurrenceBonus = 0.0016;
const prismaticWeaponryBonus = 0.06;


/**
 * @param {number} baseGunDamage
 * @param {number} baseMeleeDamage
 * @returns {number}
 */

export const calculateGunDamage = (baseGunDamage, coldIronLevel, graveFiendsLevel, recurrenceLevel, prismaticWeaponryLevel) =>{
    const totalColdIronBonus = coldIronLevel * coldIronBonus;
    const totalGraveFiendsBonus = graveFiendsLevel * graveFiendsBonus;
    const totalRecurenceBonus = recurrenceLevel * recurrenceBonus * 50;
    const totalPrismaticWeaponryBonus = prismaticWeaponryLevel * prismaticWeaponryBonus;

    if (baseGunDamage === 2000 || baseGunDamage === 14233 ){
        return baseGunDamage * (1 + totalColdIronBonus) * (1 + totalGraveFiendsBonus) * (1 + totalRecurenceBonus) * (1 + totalPrismaticWeaponryBonus) * 3;
    }

    if (baseGunDamage === 657){
        return baseGunDamage * (1 + totalColdIronBonus) * (1 + totalGraveFiendsBonus) * (1 + totalRecurenceBonus) * (1 + totalPrismaticWeaponryBonus) * 2;
    }

    return baseGunDamage * (1 + totalColdIronBonus) * (1 + totalGraveFiendsBonus) * (1 + totalRecurenceBonus) * (1 + totalPrismaticWeaponryBonus);
};

const fellInscriptionBonus = 0.07;

export const calculateMeleeDamage = (baseMeleeDamage, fellInscriptionLevel) => {

    let totalFellInscriptionBonus = fellInscriptionLevel * fellInscriptionBonus;

    if (fellInscriptionLevel === 5){
        totalFellInscriptionBonus -= 0.03;
    }

    return baseMeleeDamage * (1 + totalFellInscriptionBonus)
}