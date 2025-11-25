import React, { useState } from 'react';
import './characterBuilder.css';
import { calculateGunDamage } from './damageCalculator.js';


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
    const [graveAssaultLevel, setGraveAssaultLevel] = useState(0)
    const graveAssaultChange = (event) => {
        setGraveAssaultLevel(parseInt(event.target.value) || 0)
    }

    const baseGunDamage = 100;
    const finalGunDamage  = calculateGunDamage(
        baseGunDamage,
        coldIronLevel,
        graveAssaultLevel,
        graveFiendsLevel,
        recurrenceLevel
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
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="idleHands">Idle Hands</label>
                        <select id="idleHands" name="varSelect">
                            <option defaultValue>-</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
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
                        <select id="fellInscription" name="varSelect">
                            <option defaultValue>-</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                </div>

                <div className="skill_row2">
                    <div>
                        <label htmlFor="graveAssault">Grave Assault</label>
                        <select 
                            id="graveAssault" 
                            name="varSelect"
                            onChange={graveAssaultChange}
                            value={graveAssaultLevel}
                            >
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
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
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
                                <select id="prismaticWeaponry" name="varSelect">
                                    <option defaultValue>-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
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
                        <select id="weapon1" name="varSelect">
                            <option defaultValue>-</option>
                            <option>AR</option>
                            <option>Shotgun</option>
                            <option>SMG</option>
                            <option>Pistol</option>
                            <option>Sniper</option>
                        </select>
                    </div>

                    <div> 
                        <label htmlFor="weapon2">Weapon Slot 2</label>
                        <select id="weapon2" name="varSelect">
                            <option defaultValue>-</option>
                            <option>AR</option>
                            <option>Shotgun</option>
                            <option>SMG</option>
                            <option>Pistol</option>
                            <option>Sniper</option>
                        </select>
                    </div>
                </div>

                <div className="weapon_row"> 
                    <div> 
                        <label htmlFor="weapon3">Weapon Slot 3</label>
                        <select id="weapon3" name="varSelect">
                            <option defaultValue>-</option>
                            <option>AR</option>
                            <option>Shotgun</option>
                            <option>SMG</option>
                            <option>Pistol</option>
                            <option>Sniper</option>
                        </select>
                    </div>

                    <div> 
                        <label htmlFor="weapon4">Weapon Slot 4</label>
                        <select id="weapon4" name="varSelect">
                            <option defaultValue>-</option>
                            <option>AR</option>
                            <option>Shotgun</option>
                            <option>SMG</option>
                            <option>Pistol</option>
                            <option>Sniper</option>
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
                            <option>Shield 1</option>
                            <option>Shield 2</option>
                            <option>Shield 3</option>
                            <option>Shield 4</option>
                            <option>Shield 5</option>
                        </select>
                    </div>

                    <div> 
                        <label htmlFor="revKit">Rev Kit</label>
                        <select id="revKit" name="varSelect"> 
                            <option defaultValue>-</option>
                            <option>Rev Kit 1</option>
                            <option>Rev Kit 2</option>
                            <option>Rev Kit 3</option>
                            <option>Rev Kit 4</option>
                            <option>Rev Kit 5</option>
                        </select>
                    </div>
                </div>
                
                <div className="util_row">
                    <div> 
                        <label htmlFor="ordinance">Ordinance</label>
                        <select id="ordinance" name="varSelect">
                            <option defaultValue>-</option>
                            <option>Rocket Launcher</option>
                            <option>Grenade</option>
                            <option>Throwing Knife</option>
                            <option>Minigun</option>
                        </select>
                    </div>

                    <div> 
                        <label htmlFor="classMod">Class Mod</label>
                        <select id="classMod" name="varSelect">
                            <option defaultValue>-</option>
                            <option>Mod 1</option>
                            <option>Mod 2</option>
                            <option>Mod 3</option>
                            <option>Mod 4</option>
                            <option>Mod 5</option>
                        </select>
                    </div>
                </div>
            </fieldset>
        </div> 

        <h2 className="calculator_header">Build Numbers Calculated</h2>
        <div className="calculator_values">
            <div>HP: 1000</div>
            <div>Shield: 7837</div>
            <div>Melee Damage: 9999 </div>
            <div>Max Potential Gun Damage: **{finalGunDamage.toFixed(2)}**</div>
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