const coldIronBonus = 0.03;
const graveAssaultBonus = 0.015;
const graveFiendsBonus = 0.025;
const recurrenceBonus = 0.16;


/**
 * @param {number} baseDamage
 * @returns {number}
 */

export const calculateGunDamage = (baseDamage, coldIronLevel, graveAssaultLevel, graveFiendsLevel, recurrenceLevel) =>{
    const totalColdIronBonus = coldIronLevel * coldIronBonus;
    const totalGraveAssaultBonus = graveAssaultLevel * graveAssaultBonus * 3;
    const totalGraveFiendsBonus = graveFiendsLevel * graveFiendsBonus;
    const totalRecurenceBonus = recurrenceLevel * recurrenceBonus;


    return baseDamage * (1 + totalColdIronBonus) * (1 + totalGraveAssaultBonus) * (1 + totalGraveFiendsBonus) * (1 + totalRecurenceBonus);
};