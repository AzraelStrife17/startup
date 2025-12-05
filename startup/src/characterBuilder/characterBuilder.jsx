import React, { useState } from 'react';
import './characterBuilder.css';
import { calculateGunDamage } from './damageCalculator.js';
import { calculateMeleeDamage } from './damageCalculator.js';


export function CharacterBuilder() {
    const [coldIronLevel, setColdIronLevel] = useState(0)
    const coldIronChange = (event) => {
        setColdIronLevel(parseInt(event.target.value) || 0)
    }
    const [graveFiendsLevel, setGraveFiends] = useState(0)
    const graveFiendsChange = (event) => {
        setGraveFiends(parseInt(event.target.value) || 0)
    }
    const [recurrenceLevel, setRecurrenceLevel] = useState(0)
    const recurrenceChange = (event) => {
        setRecurrenceLevel(parseInt(event.target.value) || 0)
    }

    const [prismaticWeaponryLevel, setPrismaticWeaponryLevel] = useState(0)
    const prismaticWeaponryChange = (event) => {
        setPrismaticWeaponryLevel(parseInt(event.target.value) || 0)
    }

    const [selectedGun, setSelectedGun] = useState(0)
    const selectedGunChange = (event) => {
        setSelectedGun(parseInt(event.target.value) || 0)
    }
    

    const baseGunDamage = selectedGun;
    const finalGunDamage  = calculateGunDamage(
        baseGunDamage,
        coldIronLevel,
        graveFiendsLevel,
        recurrenceLevel,
        prismaticWeaponryLevel
    );


    const [fellInscriptionLevel, setFellInscriptionLevel] = useState(0)
    const fellInscriptionChange = (event) => {
        setFellInscriptionLevel(parseInt(event.target.value) || 0)
    }

    const baseMeleeDamage = 100;
    const finalMeleeDamage = calculateMeleeDamage(
        baseMeleeDamage,
        fellInscriptionLevel
    );


  return (
    <main>
        <span className="login_name">User Logged In</span>
        <h1>Character Builder</h1>
        <h2 className="skill_tree_header">Skill Tree</h2>
        <div>
            <fieldset className="skill_tree"> 
                <fieldset className="action_skills">
                    <legend>Action Skill</legend>
                    <div className='action_skill_content'>
                      <label>
                          <input type="radio" id="actionSkill1" name="varRadio" value="radio1" /> Phase Familiar
                      </label>
                      
                      <label>
                          <input type="radio" id="actionSkill2" name="varRadio" value="radio2" /> Incarnate
                      </label>
                      
                      <label>
                          <input type="radio" id="actionSkill3" name="varRadio" value="radio3" /> Dead Ringer
                      </label>
                    </div>
                </fieldset>


                <div className="skill_row1">
                    <div>
                        <label htmlFor="sanguineFiends">Sanguine Fiends</label>
                        <select id="sanguineFiends" name="varSelect">
                            <option defaultValue>-</option>
                            <option>1: +4% hp regen</option>
                            <option>2: +8% hp regen</option>
                            <option>3: +12% hp regen</option>
                            <option>4: +16% hp regen</option>
                            <option>5: +20% hp regen</option>
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="idleHands">Idle Hands</label>
                        <select id="idleHands" name="varSelect">
                            <option defaultValue>-</option>
                            <option>1: +12% reload</option>
                            <option>2: +22% reload</option>
                            <option>3: +30% reload</option>
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="coldIron">Cold Iron</label>
                        <select 
                            id="coldIron"
                            name="varSelect"
                            onChange={coldIronChange}
                            value={coldIronLevel}>
                            <option defaultValue="0">-</option>
                            <option value="1">1: +3% gun damage</option>
                            <option value="2">2: +6% gun damage</option>
                            <option value="3">3: +9% gun damage</option>
                            <option value="4">4: +12% gun damage</option>
                            <option value="5">5: +15% gun damage</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="fellInscription">Fell Inscription</label>
                        <select 
                            id="fellInscription" 
                            name="varSelect"
                            onChange={fellInscriptionChange}
                            value={fellInscriptionLevel}>
                            <option defaultValue>-</option>
                            <option value="1">1: +7% Melee & +6% HP</option>
                            <option value="2">2: +14% Melee & +12% HP</option>
                            <option value="3">3: +21% Melee & +18% HP</option>
                            <option value="4">4: +28% Melee & +24% HP</option>
                            <option value="5">5: +32% Melee & +30% HP</option>
                        </select>
                    </div>

                </div>

                <div className="skill_row2">
                    <div>
                        <label htmlFor="graveAssault">Grave Assault</label>
                        <select >
                            <option defaultValue="0">-</option>
                            <option value="1">1:</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="portentsSuffering">Portents of Suffering</label>
                        <select id="portentsSuffering" name="varSelect">
                            <option defaultValue>-</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="cursedBlade">Cursed Blade</label>
                        <select id="cursedBlade" name="varSelect">
                            <option defaultValue>-</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>

                <div className="skill_row3">
                    <div>
                        <label htmlFor="bloodSacrifice">Blood Sacrifice</label>
                        <select id="bloodSacrifice" name="varSelect">
                            <option defaultValue>-</option>
                            <option>1</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="graveFiends">Grave Fiends</label>
                        <select 
                            id="graveFiends" 
                            name="varSelect"
                            onChange={graveFiendsChange}
                            value={graveFiendsLevel}
                            >
                            <option defaultValue="0">-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="graveQuickening">Grave Quickening</label>
                        <select id="graveQuickening" name="varSelect">
                            <option defaultValue>-</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="extraCursed">Extra Cursed</label>
                        <select id="extraCursed" name="varSelect">
                            <option defaultValue>-</option>
                            <option>1</option>
                        </select>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <fieldset className="mastery_tree">
                        <legend>Mastery Tree 1</legend>
                        <div className="skill_row1">
                            <div>
                                <label htmlFor="blightAttunement">Blight Attunement</label>
                                <select id="blightAttunement" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            
                            <div>
                                <label htmlFor="prismaticIchor">Prismatic Ichor</label>
                                <select id="prismaticIchor" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>

                        <div className="skill_row1">
                            <div>
                                <label htmlFor="keenSuffering">Keen Suffering</label>
                                <select id="keenSuffering" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="ghasterBait">Ghaster Bait</label>
                                <select id="ghasterBait" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="shotGo">Shot To Go</label>
                                <select id="shotGo" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                        </div>

                        <div className="single_skill_row">
                            <div>
                                <label htmlFor="necrosis">Necrosis</label>
                                <select id="necrosis" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="mastery_tree">
                        <legend>Mastery Tree 2</legend>
                        <div className="skill_row1">
                            <div>
                                <label htmlFor="burningAttunment">Burning Attunement</label>
                                <select id="burningAttunment" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="recurrence">Recurrence</label>
                                <select 
                                    id="recurrence" 
                                    name="varSelect"
                                    onChange={recurrenceChange}
                                    value={recurrenceLevel}
                                    >
                                    <option defaultValue>-</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>

                        <div className="skill_row1"> 
                            <div>
                                <label htmlFor="reverburnations">Reverburnations</label>
                                <select id="reverburnations" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="haruspex">Haruspex</label>
                                <select id="haruspex" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>

                        <div className="mastery_bottom_row">
                            <div>
                                <label htmlFor="burntOffering">Burnt Offering</label>
                                <select id="burntOffering" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="pincushion">Pincushion</label>
                                <select id="pincushion" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="mastery_tree">
                        <legend>Mastery Tree 3</legend>
                        <div className="skill_row1">
                            <div>
                                <label htmlFor="prismaticWeaponry">Prismatic Weaponry</label>
                                <select 
                                    id="prismaticWeaponry" 
                                    name="varSelect"
                                    onChange={prismaticWeaponryChange}
                                    value={setPrismaticWeaponryLevel}>
                                    <option defaultValue>-</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            

                            <div>
                                <label htmlFor="obedientFiends">Obedient Fiends</label>
                                <select id="obedientFiends" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="skill_row1">
                            <div>
                                <label htmlFor="spiritBomb">Spirit Bomb</label>
                                <select id="spiritBomb" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="ancientRites">Ancient Rites</label>
                                <select id="ancientRites" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="deathCloser">Death Follows Closer</label>
                                <select id="deathCloser" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                        </div>

                        <div className="single_skill_row">
                            <div>
                                <label htmlFor="diener">Diener</label>
                                <select id="diener" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>
                </div>

            </fieldset>

        </div> 
        <h2 className="equipment_header">Equipment</h2>
        <div className="equipment">
            <fieldset className="weapons">
                <legend>Weapons</legend>
                <div className="weapon_row">
                    <div>
                        <label htmlFor="weapon1">Weapon Slot 1</label>
                        <select 
                            id="weapon1" 
                            name="varSelect"
                            onChange={selectedGunChange}
                            value={selectedGun}>
                            <option defaultValue>Use This Slot for Calculation</option>
                            <option value="401">Aegon: 401 damage</option>
                            <option value="2000">Lead: 2000 x 3 damage</option>
                            <option value="657">Darkbeast: 657 x 2 damage</option>
                            <option value="743">Zipper: 743 damage</option>
                            <option value="14233">Stray: 14233 x 3</option>
                        </select>
                    </div>

                    <div> 
                        <label htmlFor="weapon2">Weapon Slot 2</label>
                        <select id="weapon2" name="varSelect">
                            <option defaultValue>-</option>
                            <option value="401">Aegon: 401 damage</option>
                            <option value="2000">Lead: 2000 x 3 damage</option>
                            <option value="657">Darkbeast: 657 x 2 damage</option>
                            <option value="743">Zipper: 743 damage</option>
                            <option value="14233">Stray: 14233 x 3</option>
                        </select>
                    </div>
                </div>

                <div className="weapon_row"> 
                    <div> 
                        <label htmlFor="weapon3">Weapon Slot 3</label>
                        <select id="weapon3" name="varSelect">
                            <option defaultValue>-</option>
                            <option value="401">Aegon: 401 damage</option>
                            <option value="2000">Lead: 2000 x 3 damage</option>
                            <option value="657">Darkbeast: 657 x 2 damage</option>
                            <option value="743">Zipper: 743 damage</option>
                            <option value="14233">Stray: 14233 x 3</option>
                        </select>
                    </div>

                    <div> 
                        <label htmlFor="weapon4">Weapon Slot 4</label>
                        <select id="weapon4" name="varSelect">
                            <option defaultValue>-</option>
                            <option value="401">Aegon: 401 damage</option>
                            <option value="2000">Lead: 2000 x 3 damage</option>
                            <option value="657">Darkbeast: 657 x 2 damage</option>
                            <option value="743">Zipper: 743 damage</option>
                            <option value="14233">Stray: 14233 x 3</option>
                        </select>
                    </div>
                </div>
            </fieldset>
            
            <fieldset className="utility">
                <legend>Utilities</legend>
                <div className="util_row">
                    <div>
                        <label htmlFor="shield">Shield</label>
                        <select id="shield" name="varSelect">
                            <option defaultValue>-</option>
                            <option>Firewerks</option>
                            <option>Cindershelly</option>
                            <option>Guardian Angel</option>
                            <option>Heavyweight</option>
                        </select>
                    </div>

                    <div> 
                        <label htmlFor="revKit">Rev Kit</label>
                        <select id="revKit" name="varSelect"> 
                            <option defaultValue>-</option>
                            <option>AF1000</option>
                            <option>Kill Spring</option>
                            <option>Pacemaker</option>
                            <option>Blood Analyzer</option>
                        </select>
                    </div>
                </div>
                
                <div className="util_row">
                    <div> 
                        <label htmlFor="ordinance">Ordinance</label>
                        <select id="ordinance" name="varSelect">
                            <option defaultValue>-</option>
                            <option>Atling Gun</option>
                            <option>Chaumurky</option>
                            <option>JSho Kunai</option>
                            <option>Inkling</option>
                        </select>
                    </div>

                    <div> 
                        <label htmlFor="classMod">Class Mod</label>
                        <select id="classMod" name="varSelect">
                            <option defaultValue>-</option>
                            <option>Avatar</option>
                            <option>Technomancer</option>
                            <option>Undead Eye</option>
                            <option>Illusionist</option>
                        </select>
                    </div>
                </div>
            </fieldset>
        </div> 

        <h2 className="calculator_header">Build Numbers Calculated</h2>
        <div className="calculator_values">
            <div>HP: 1000</div>
            <div>Shield: 7837</div>
            <div>Melee Damage: {finalMeleeDamage.toFixed(2)} </div>
            <div>Max Potential Gun Damage: {finalGunDamage.toFixed(2)}</div>
        </div>

        <h2 className="build_descript_header">Build Description</h2>
        <div className="descript">
            <input type="text" className="description_input" placeholder="Give description about your build works" />
        </div>
        <div>
            <button className="submit_upload" type="submit">Save Build</button>
            <button className="submit_upload" type="submit">Upload Build Online</button>
        </div>

    </main>
  );
}