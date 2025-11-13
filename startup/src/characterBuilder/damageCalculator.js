const coldIronBonus = 0.03;
const graveFiendsBonus = 0.025;

/**
 * @param {number} baseDamage
 * @param {number} coldIronLevel
 * @returns {number}
 */

export const calculateGunDamage = (baseDamage, coldIronLevel, graveFiendsLevel) =>{
    const totalColdIronBonus = coldIronLevel * coldIronBonus;
    const totalGraveFiendsBonus = graveFiendsLevel * graveFiendsBonus;

    return baseDamage * (1 + totalColdIronBonus) * (1 + totalGraveFiendsBonus);
};