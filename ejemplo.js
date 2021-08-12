let chara = simp.listCharacter(name);
    for(let i=0; i< chara.length; i++){
        delete chara[i].family
    }
    res.status(200).json(chara)