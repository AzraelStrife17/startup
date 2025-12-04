const coldIronBonus = 0.03;
const graveFiendsBonus = 0.025;
const recurrenceBonus = 0.0016;
const prismaticWeaponryBonus = 0.06;


/**
 * @param {number} baseDamage
 * @returns {number}
 */

export const calculateGunDamage = (baseDamage, coldIronLevel, graveFiendsLevel, recurrenceLevel, prismaticWeaponryLevel) =>{
    const totalColdIronBonus = coldIronLevel * coldIronBonus;
    const totalGraveFiendsBonus = graveFiendsLevel * graveFiendsBonus;
    const totalRecurenceBonus = recurrenceLevel * recurrenceBonus * 50;
    const totalPrismaticWeaponryBonus = prismaticWeaponryLevel * prismaticWeaponryBonus;

    if (baseDamage === 2000){
        return baseDamage * (1 + totalColdIronBonus) * (1 + totalGraveFiendsBonus) * (1 + totalRecurenceBonus) * (1 + totalPrismaticWeaponryBonus) * 3;
    }

    if (baseDamage === 657){
        return baseDamage * (1 + totalColdIronBonus) * (1 + totalGraveFiendsBonus) * (1 + totalRecurenceBonus) * (1 + totalPrismaticWeaponryBonus) * 2;
    }


    return baseDamage * (1 + totalColdIronBonus) * (1 + totalGraveFiendsBonus) * (1 + totalRecurenceBonus) * (1 + totalPrismaticWeaponryBonus);
};