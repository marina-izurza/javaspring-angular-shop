package com.kreitek.store.application.mapper;

import com.kreitek.store.application.dto.CategoryDTO;
import com.kreitek.store.domain.entity.Category;
import org.mapstruct.Mapper;

//Se encarga de hacer la transformación de un objeto Category a un objeto CategoryDTO, y viceversa.
@Mapper(componentModel = "spring")
public interface CategoryMapper extends EntityMapper<CategoryDTO, Category> {

    default Category fromId(Long id) { //transforma un ID de tipo Long en un objeto Category

        if (id == null) return null;

        Category category = new Category();
        category.setId(id);
        return category; //devuelve el objeto Category creado
    }
}
