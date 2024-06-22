import { Checkbox } from '@nextui-org/react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';

const genders = ['Hombre', 'Mujer'];

const ServiceFilter = () => {
  return (
    <div className='bg-content2 rounded-lg p-6'>
      <Accordion
        className='w-full'
      >
        <AccordionItem
          key='1'
          aria-label='Filtrar por genero'
          title='Filtrar por genero'
        >
          <div className='grid gap-2'>
            {genders.map((gender) => (
              <Checkbox key={gender} color='default'>
                {gender}
              </Checkbox>
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ServiceFilter;
