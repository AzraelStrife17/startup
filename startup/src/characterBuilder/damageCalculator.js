const coldIronBonus = 0.03;
const graveFiendsBonus = 0.025;
const recurrenceBonus = 0.0016;


/**
 * @param {number} baseDamage
 * @returns {number}
 */

export const calculateGunDamage = (baseDamage, coldIronLevel, graveFiendsLevel, recurrenceLevel) =>{
    const totalColdIronBonus = coldIronLevel * coldIronBonus;
    const totalGraveFiendsBonus = graveFiendsLevel * graveFiendsBonus;
    const totalRecurenceBonus = recurrenceLevel * recurrenceBonus * 50;


    return baseDamage * (1 + totalColdIronBonus) * (1 + totalGraveFiendsBonus) * (1 + totalRecurenceBonus);
};